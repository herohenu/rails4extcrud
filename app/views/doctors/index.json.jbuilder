json.array!(@doctors) do |doctor|
  json.extract! doctor, :name, :deparment_id
  json.url doctor_url(doctor, format: :json)
end