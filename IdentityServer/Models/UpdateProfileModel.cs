namespace IdentityServer.Models
{
    public class UpdateProfileModel
    {
        public string CurrentUserName { get; set; }
        public string NewUserName { get; set; }
        public string Email { get; set; }
        public string Name { get; set; }
    }
}