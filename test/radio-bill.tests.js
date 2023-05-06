//radio-bill.tests.js
describe('radioBillTotal', function() {
    it('should add 2.75 when call is checked', function() {
      const results = radioBillTotal();
      results.calculateBill('call');
      assert.equal(results.getTotals().calls, '2.75');
    });
    it('should add 0.75 when sms is checked', function() {
      const results = radioBillTotal();
      results.calculateBill('sms');
      assert.equal(results.getTotals().sms, '0.75');
    });
    it('should add 3.50 to the total when one sms and one call is made', function() {
      const results = radioBillTotal();
      results.calculateBill('sms');
      results.calculateBill('call');
      assert.equal(results.getTotals().total, '3.50');
    });
  
    it('should return warning level if the total  exceed R30.00 ', function() {
      const results = radioBillTotal();
      results.calculateBill('call');
      results.calculateBill('call');
      results.calculateBill('call');
      results.calculateBill('call');
      results.calculateBill('call');
      results.calculateBill('call');
      results.calculateBill('call');
      results.calculateBill('call');
      results.calculateBill('call');
      results.calculateBill('call');
      results.calculateBill('call');
      
      assert.equal(results.getTotals().calls, '30.25');
      assert.equal(results.getColor(), 'warning');
    });
    it('should return danger level if the total  exceed R50.00 ', function() {
      const results = radioBillTotal();
      results.calculateBill('call');
      results.calculateBill('call');
      results.calculateBill('call');
      results.calculateBill('call');
      results.calculateBill('call');
      results.calculateBill('call');
      results.calculateBill('call');
      results.calculateBill('call');
      results.calculateBill('call');
      results.calculateBill('call');
      results.calculateBill('call');
      results.calculateBill('call');
      results.calculateBill('call');
      results.calculateBill('call');
      results.calculateBill('call');
      results.calculateBill('call');
      results.calculateBill('call');
      results.calculateBill('call');
      results.calculateBill('call');
      
      assert.equal(results.getTotals().calls, '52.25');
      assert.equal(results.getColor(), 'danger');
    });
  });