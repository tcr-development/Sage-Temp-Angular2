
namespace Tcr.Sage.Domain.Models {
   public partial class AspNetUserRoles {
      public int UserId { get; set; }
      public int RoleId { get; set; }
      public virtual AspNetRoles Role { get; set; }
      public virtual AspNetUsers User { get; set; }
   }
}
