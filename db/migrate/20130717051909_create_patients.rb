class CreatePatients < ActiveRecord::Migration
  def change
    create_table :patients do |t|
      t.string :patient_ids
      t.string :spell_code
      t.string :name
      t.string :social_security_number
      t.string :sex
      t.date :birthday
      t.string :residence
      t.string :nationality
      t.string :citizenship
      t.string :photo
      t.string :education
      t.string :household
      t.string :occupation
      t.string :orgnization
      t.string :orgnization_address
      t.string :mobile_phone
      t.string :home_phone
      t.string :home_address
      t.string :contact
      t.string :contact_phone
      t.string :habitual_type
      t.string :marital_status
      t.string :insurance_type
      t.string :insurance_number
      t.string :blood_type
      t.string :allergy_history
      t.string :vaccination_history
      t.string :disease_history
      t.string :heredopathia_history
      t.string :health_risk_factor
      t.boolean :is_handicapped
      t.string :handicap_card_number

      t.timestamps
    end
  end
end
