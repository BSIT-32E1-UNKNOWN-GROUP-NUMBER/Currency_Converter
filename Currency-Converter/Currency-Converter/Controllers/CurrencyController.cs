using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Collections.Generic;

public class CurrencyController : Controller
{
    private readonly HttpClient _client;

    public CurrencyController()
    {
        _client = new HttpClient();
    }

    [HttpGet("Currency/Convert/{from}/{to}/{amount}")]
    public async Task<IActionResult> Convert(string from, string to, decimal amount)
    {
        var request = new HttpRequestMessage(HttpMethod.Get, $"https://v6.exchangerate-api.com/v6/993bdbfbb2fcb28463cbba6a/latest/{from}");
        var response = await _client.SendAsync(request);
        response.EnsureSuccessStatusCode();
        var content = await response.Content.ReadAsStringAsync();
        var rates = JsonConvert.DeserializeObject<Root>(content);
        if (rates?.conversion_rates != null && rates.conversion_rates.ContainsKey(to))
        {
            var rate = rates.conversion_rates[to];
            var convertedAmount = amount * rate;
            return Ok(convertedAmount);
        }
        else
        {
          
            return NotFound("Rates not available");
        }
    }

    public class Root
    {
        public string? base_code { get; set; }
        public Dictionary<string, decimal>? conversion_rates { get; set; }

    }
}