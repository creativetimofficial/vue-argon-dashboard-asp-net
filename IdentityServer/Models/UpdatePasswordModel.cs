﻿namespace IdentityServer.Models
{
    public class UpdatePasswordModel
    {
        public string UserName { get; set; }
        public string CurrentPassword { get; set; }

        public string NewPassword { get; set; }
    }
}
