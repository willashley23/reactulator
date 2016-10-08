json.set! "#{calculation.id}" do
  json.extract! calculation, :expression, :user_id
end

