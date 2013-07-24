class CreatePatients < ActiveRecord::Migration
  def change
    create_table :patients, :primary_key => :id do |t|
      t.string :patient_ids, null => false
      t.string :spell_code
      t.string :name, null => false
      t.string :social_security_number, null => false
      t.string :sex, null => false, default => "男"
      t.date :birthday, null => false
      t.string :address
      t.string :nationality
      t.string :citizenship
      t.string :province
      t.string :county
      t.string :photo
      t.string :education
      t.string :household
      t.string :occupation
      t.string :orgnization
      t.string :orgnization_address
      t.string :mobile_phone, null => false
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
    add_index :patients, :id, :unique => true
    add_index :patients, :patient_ids
    add_index :patients, :name
    add_index :patients, :social_security_number
    add_index :patients, :sex
    add_index :patients, :mobile_phone
  end
end
