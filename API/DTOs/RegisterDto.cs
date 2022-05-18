using System.ComponentModel.DataAnnotations;


namespace API.DTOs
{
     /**
        DTOs used to pass as body parameters into HTTP methods
    **/
    public class RegisterDto
    {
        [Required]
        public string UserName { get; set; }

        [Required]
        [StringLength(8, MinimumLength = 4)]
        public string Password { get; set; }
    }
}