namespace Tcr.Sage.Domain.Models {
   public partial class AspNetUserLogins {
      public string LoginProvider { get; set; }
      public string ProviderKey { get; set; }
      public int UserId { get; set; }

      public virtual AspNetUsers User { get; set; }
   }
}
