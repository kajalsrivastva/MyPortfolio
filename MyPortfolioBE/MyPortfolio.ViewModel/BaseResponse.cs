using MyPortfolio.Core.Helper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyPortfolio.ViewModel
{
    public class BaseResponse
    {
        public ResponseCodes ResponseCode { get; set; }
        public string ResponseMessage { get; set; }
    }
}
