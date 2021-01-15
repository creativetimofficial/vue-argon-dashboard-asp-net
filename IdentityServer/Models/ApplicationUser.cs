using Microsoft.AspNetCore.Identity;

namespace IdentityServer.Models
{
    // Add profile data for application users by adding properties to the ApplicationUser class
    public class ApplicationUser : IdentityUser
    {
        public string Name { get; set; }

        public ApplicationUser() { }

        public ApplicationUser(string email, string name)
        {
            Name = name;
            base.UserName = email; //use the username as email address
            base.Email = email;
            base.EmailConfirmed = true;
        }
    }
}
