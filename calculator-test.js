describe ('Calculate Monthly Rate', function() {
it('should calculate the monthly rate correctly', function(){
  const values = { amount: 20000, years: 10, rate: 3 };
  expect(calculateMonthlyPayment(values)).toEqual('193.12');
}); 

it("should return a result with 2 decimal places", function() {
  const values = { amount: 10000, years: 7, rate: 5.7};
  expect (calculateMonthlyPayment(values)).toEqual('144.65')
});

})




