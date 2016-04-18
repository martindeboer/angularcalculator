using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AngularTest.Controllers
{
    public class MathController : ApiController
    {
        [HttpGet]
        public double Add (float leftHand, float rightHand)
        {
            return leftHand + rightHand;
        }

        [HttpGet]
        public double Subtract (float leftHand, float rightHand)
        {
            return leftHand - rightHand;
        }

        [HttpGet]
        public double Divide(float leftHand, float rightHand)
        {
           
            if (rightHand == 0)
            {
                throw new Exception();
            }

            return leftHand / rightHand;
        }

        [HttpGet]
        public double Multiply(float leftHand, float rightHand)
        {
            return leftHand * rightHand;
        }
    }
}
