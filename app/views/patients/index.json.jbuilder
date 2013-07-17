json.array!(@patients) do |patient|
  json.extract! patient, :patient_ids, :spell_code, :name, :social_security_number, :sex, :birthday, :residence, :nationality, :citizenship, :photo, :education, :household, :occupation, :orgnization, :orgnization_address, :mobile_phone, :home_phone, :home_address, :contact, :contact_phone, :habitual_type, :marital_status, :insurance_type, :insurance_number, :blood_type, :allergy_history, :vaccination_history, :disease_history, :heredopathia_history, :health_risk_factor, :is_handicapped
  json.url patient_url(patient, format: :json)
end