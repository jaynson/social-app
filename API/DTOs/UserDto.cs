
namespace API.DTOs
{
     /**
        DTOs used to pass as body parameters into HTTP methods
    **/
    public class UserDto
    {
        public string Username { get; set; }
        public string Token { get; set; }

        public string PhotoUrl { get; set; }
    }
}