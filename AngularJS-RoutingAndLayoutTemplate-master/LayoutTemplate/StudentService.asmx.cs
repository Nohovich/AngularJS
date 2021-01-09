using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Web.Script.Serialization;
using System.Web.Services;
namespace LayoutTemplate
{
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this web service to be celled from script, using ASP.NET AJAX
    [System.Web.Script.Services.ScriptService]
    public class StudentService : System.Web.Services.WebService
    {
        [WebMethod]
        public void GetAllStudents()
        {
            // creating a list of Students
            List<Student> listStudents = new List<Student>();
            // creating a ConnectionStrings DBCS is the name of the web.config(connectionString)
            string cs = ConfigurationManager.ConnectionStrings["DBCS"].ConnectionString;
            // creating SqlConnection and passing the ConnectionStrings
            using (SqlConnection con = new SqlConnection(cs))
            {
                // the command
                SqlCommand cmd = new SqlCommand("Select * from tblStudents", con);
                // open SqlConnection
                con.Open();
                // Execute and read the command
                SqlDataReader rdr = cmd.ExecuteReader();
                // while theres more data to read
                while (rdr.Read())
                {
                    // creating student
                    Student student = new Student();
                    student.id = Convert.ToInt32(rdr["Id"]);
                    student.name = rdr["Name"].ToString();
                    student.gender = rdr["Gender"].ToString();
                    student.city = rdr["City"].ToString();
                    // adding the tudent to the list
                    listStudents.Add(student);
                }
            }
            // creating JavaScriptSerializer
            JavaScriptSerializer js = new JavaScriptSerializer();
            // Serializing the data to json
            Context.Response.Write(js.Serialize(listStudents));
        }

        [WebMethod]
        public void GetStudent(int id)
        {
            Student student = new Student();

            string cs = ConfigurationManager.ConnectionStrings["DBCS"].ConnectionString;
            using (SqlConnection con = new SqlConnection(cs))
            {
                SqlCommand cmd = new
                    SqlCommand("Select * from tblStudents where id = @id", con);

                SqlParameter param = new SqlParameter()
                {
                    ParameterName = "@id",
                    Value = id
                };

                cmd.Parameters.Add(param);

                con.Open();
                SqlDataReader rdr = cmd.ExecuteReader();
                while (rdr.Read())
                {
                    student.id = Convert.ToInt32(rdr["Id"]);
                    student.name = rdr["Name"].ToString();
                    student.gender = rdr["Gender"].ToString();
                    student.city = rdr["City"].ToString();
                }
            }

            JavaScriptSerializer js = new JavaScriptSerializer();
            Context.Response.Write(js.Serialize(student));
        }

    }
}
