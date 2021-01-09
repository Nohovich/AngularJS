using HttpService;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Web.Script.Serialization;
using System.Web.Services;

namespace HttpService
{
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this web service to be celled from script, using ASP.NET AJAX
    [System.Web.Script.Services.ScriptService]
    public class EmployeeService : System.Web.Services.WebService
    {
        [WebMethod]
        public void GetAllEmployees()
        {
            // creating a list of Employees
            List<Employee> listEmployees = new List<Employee>();
            // creating a ConnectionStrings DBCS is the name of the web.config(connectionString)
            string cs = ConfigurationManager.ConnectionStrings["DBCS"].ConnectionString;
            // creating SqlConnection and passing the ConnectionStrings
            using (SqlConnection con = new SqlConnection(cs))
            {
                // the command
                SqlCommand cmd = new SqlCommand("Select * from tblEmployees", con);
                // open SqlConnection
                con.Open();
                // Execute and read the command
                SqlDataReader rdr = cmd.ExecuteReader();
                // while theres more data to read
                while (rdr.Read())
                {
                    // creating Employee
                    Employee employee = new Employee();
                    employee.id = Convert.ToInt32(rdr["Id"]);
                    employee.name = rdr["Name"].ToString();
                    employee.gender = rdr["Gender"].ToString();
                    employee.salary = Convert.ToInt32(rdr["Salary"]);
                    // adding the employee to the list
                    listEmployees.Add(employee);
                }
            }
            // creating JavaScriptSerializer
            JavaScriptSerializer js = new JavaScriptSerializer();
            // Serializing the data to json
            Context.Response.Write(js.Serialize(listEmployees));
        }
    }
}
