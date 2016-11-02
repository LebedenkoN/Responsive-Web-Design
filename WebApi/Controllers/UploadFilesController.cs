using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebApi.Controllers
{
    public class UploadFilesController : ApiController
    {
        private List<string> files = new List<string>();
                
        // POST: UploadFiles
        [HttpPost]
        public HttpResponseMessage Post([FromBody]string file)
        {
            try
            {
                files.Add(file);
            }
            catch (Exception e)
            {
            }
            return Request.CreateResponse(HttpStatusCode.OK); ;
        }
        
    }
}