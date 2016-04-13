using Microsoft.AspNet.Mvc;

namespace Sage_Temp_UI.Controllers {
   public class AdminController : Controller {
      public IActionResult Index() {
         return View();
      }

      public IActionResult Companies() {
         return View();
      }

      public IActionResult Edit(int id) {
         return View(id);
      }
   }
}