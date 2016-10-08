export const fetchCalculations = function(success){
  $.ajax({
    method: 'GET',
    url: 'api/calculations',
    success,
    error: () => console.log("Could not fetch calculation")
  });
};

export const fetchCalculation = function(id, success){
  $.ajax({
    method: 'GET',
    url: `api/calculations/${id}`,
    success
  });
};

export const createCalculation = function(calculation, success, error){
  $.ajax({
    method: 'POST',
    url: 'api/calculations',
    data: calculation,
    success,
    error
  });
};