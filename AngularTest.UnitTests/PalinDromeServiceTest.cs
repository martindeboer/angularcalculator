using System;
using AngularTest.Services;
using System.Text.RegularExpressions;
using Xunit;

namespace AngularTest.UnitTests
{

    public class PalinDromeServiceTest
    {
        private PalinDromeService _palinDromeService;

        public PalinDromeServiceTest()
        {
            _palinDromeService = new PalinDromeService();
        }

        [Theory]
        [InlineData(1, 1)]
        [InlineData(5, 10)]
        public void GeneratePalinDromeTest(int minLength, int maxLength)
        {
            bool noMistakes = true;

            var palinDrome = _palinDromeService.GeneratePalinDrome(minLength, maxLength);

            if (palinDrome.Length < minLength || palinDrome.Length > maxLength)
            {
                noMistakes = false;
            }

            for (int count = 0; count < palinDrome.Length / 2; count++)
            {
                if (palinDrome[count] != palinDrome[palinDrome.Length - 1 - count])
                {
                    noMistakes = false;
                }
            }
            Assert.True(noMistakes);
        }

        [Theory]
        [InlineData(0, 0)]
        [InlineData(6, 5)]
        [InlineData(10000, 20000)]
        [InlineData(-5, -3)]
        public void ExceptionTest(int minLength, int maxLength)
        {
            bool exceptionThrown = false;

            try
            {
                _palinDromeService.GeneratePalinDrome(minLength, maxLength);

            }
            catch (Exception e)
            {
                exceptionThrown = true;
            }

            Assert.True(exceptionThrown);
        }

    }
}
