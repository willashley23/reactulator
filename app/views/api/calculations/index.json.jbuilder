@calculations.each do |calculation|
    json.partial! 'api/calculations/calculation', calculation: calculation
end