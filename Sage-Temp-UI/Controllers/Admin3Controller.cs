using Microsoft.AspNet.Mvc;

namespace Sage_Temp_UI.Controllers {
   public class Admin3Controller : Controller {
      public IActionResult Index() {
         return View();
      }

      public IActionResult Edit(int id) {
         return View(id);
      }
   }
}