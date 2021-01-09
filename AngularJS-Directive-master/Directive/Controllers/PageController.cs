using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Directive.Controllers
{
    public class PageController : Controller
    {
        // GET: Page
        public ActionResult Index()
        {
            return new FilePathResult("~/Views/Page/index.html", "text/html");
        }

        public ActionResult dir()
        {
            return new FilePathResult("~/Views/Page/dir.html", "text/html");
        }
    }
}