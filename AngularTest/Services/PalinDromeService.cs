using AngularTest.Interfaces;
using System;
using System.Text.RegularExpressions;

namespace AngularTest.Services
{
    public class PalinDromeService : IPalinDromeService
    {
        private Random _random;

        public PalinDromeService()
        {
            _random = new Random();
        }

        /// <summary>
        /// Generates a palindrome with a minimum length of minLength and a maximum length of maxLength
        /// maxLength can not exceed 100.
        /// </summary>
        /// <param name="minLength"></param>
        /// <param name="maxLength"></param>
        /// <returns></returns>
        public string GeneratePalinDrome(int minLength, int maxLength)
        {
            int letterIndex;

            if (minLength > maxLength || maxLength > 100 || minLength <= 0)
            {
                throw new Exception("Invalid input");
            }

            var randomString = "";
            var length = _random.Next(minLength, maxLength + 1);

            for (int count = 0; count < length / 2; count++)
            {
                letterIndex = _random.Next(0, 26);
                randomString += (char)('a' + letterIndex);
            }

            letterIndex = _random.Next(0, 26);

            var charArray = randomString.ToCharArray();
            Array.Reverse(charArray);

            if (length % 2 != 0)
            {
                randomString += (char)('a' + letterIndex);
            }

            randomString += new string(charArray);

            return randomString;
        }
    }
}