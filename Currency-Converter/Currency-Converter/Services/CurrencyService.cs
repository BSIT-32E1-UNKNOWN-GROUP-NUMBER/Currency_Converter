using System;
using System.Net.Http;
using System.Threading.Tasks;

public class CurrencyService
{
    private readonly HttpClient _client;

    public CurrencyService()
    {
        _client = new HttpClient();
    }

    public async Task<string> GetLatestRatesAsync(string baseCurrency)
    {
        var response = await _client.GetAsync($"https://api.example.com/latest?base={baseCurrency}");
        response.EnsureSuccessStatusCode();
        return await response.Content.ReadAsStringAsync();
    }
}