using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Web.Script.Serialization;
using System.Web.Services;

namespace AnchorscrollWithDatabaseData
{
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this web service to be celled from script, using ASP.NET AJAX
    [System.Web.Script.Services.ScriptService]
    public class CountryService : System.Web.Services.WebService
    {

        [WebMethod]
        public void GetData()
        {
            // creating a list of Countries
            List<Country> listCountries = new List<Country>();
            // creating a ConnectionStrings DBCS is the name of the web.config(connectionString)
            string cs = ConfigurationManager.ConnectionStrings["DBCS"].ConnectionString;
            // creating SqlConnection and passing the ConnectionStrings
            using (SqlConnection con = new SqlConnection(cs))
            {
                // the command
                SqlCommand cmd = new SqlCommand("Select * from tblCountry;Select * from tblCity", con);
                // Execute and read the command
                SqlDataAdapter da = new SqlDataAdapter(cmd);
               // creating a data container
                DataSet ds = new DataSet();
                // adding the to container the data
                da.Fill(ds);
                // creating a data view and passing it the cities
                DataView dataView = new DataView(ds.Tables[1]);
                // for each country
                foreach (DataRow countryDataRow in ds.Tables[0].Rows)
                {
                    // creating the country using the data
                    Country country = new Country();
                    country.Id = Convert.ToInt32(countryDataRow["Id"]);
                    country.Name = countryDataRow["Name"].ToString();
                    // adding a filter only the cities that matches the country id will be shown on that row
                    dataView.RowFilter = "CountryId = '" + country.Id + "'";
                    // creating a list of cities
                    List<City> listCities = new List<City>();
                    // for data view filter
                    foreach (DataRowView cityDataRowView in dataView)
                    {
                        // add row
                        DataRow cityDataRow = cityDataRowView.Row;
                        // creating a city using the data 
                        City city = new City();
                        city.Id = Convert.ToInt32(cityDataRow["Id"]);
                        city.Name = cityDataRow["Name"].ToString();
                        city.CountryId = Convert.ToInt32(cityDataRow["CountryId"]);
                        //adding the city to the cities list
                        listCities.Add(city);
                    }
                    // adding the info to the country object
                    country.Cities = listCities;
                    // adding the country to the list
                    listCountries.Add(country);
                }
            }
            // creating JavaScriptSerializer
            JavaScriptSerializer js = new JavaScriptSerializer();
            // Serializing the data to json
            Context.Response.Write(js.Serialize(listCountries));
        }
    }

}
