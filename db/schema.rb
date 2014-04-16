# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140416051147) do

  create_table "departments", force: true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "doctors", force: true do |t|
    t.string   "name"
    t.integer  "deparment_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "patients", force: true do |t|
    t.string   "patient_ids"
    t.string   "spell_code"
    t.string   "name"
    t.string   "social_security_number"
    t.string   "sex"
    t.date     "birthday"
    t.string   "residence"
    t.string   "nationality"
    t.string   "citizenship"
    t.string   "photo"
    t.string   "education"
    t.string   "household"
    t.string   "occupation"
    t.string   "orgnization"
    t.string   "orgnization_address"
    t.string   "mobile_phone"
    t.string   "home_phone"
    t.string   "home_address"
    t.string   "contact"
    t.string   "contact_phone"
    t.string   "habitual_type"
    t.string   "marital_status"
    t.string   "insurance_type"
    t.string   "insurance_number"
    t.string   "blood_type"
    t.string   "allergy_history"
    t.string   "vaccination_history"
    t.string   "disease_history"
    t.string   "heredopathia_history"
    t.string   "health_risk_factor"
    t.boolean  "is_handicapped"
    t.string   "handicap_card_number"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
