require 'test_helper'

class PatientsControllerTest < ActionController::TestCase
  setup do
    @patient = patients(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:patients)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create patient" do
    assert_difference('Patient.count') do
      post :create, patient: { allergy_history: @patient.allergy_history, birthday: @patient.birthday, blood_type: @patient.blood_type, citizenship: @patient.citizenship, contact: @patient.contact, contact_phone: @patient.contact_phone, disease_history: @patient.disease_history, education: @patient.education, habitual_type: @patient.habitual_type, handicap_card_number: @patient.handicap_card_number, health_risk_factor: @patient.health_risk_factor, heredopathia_history: @patient.heredopathia_history, home_address: @patient.home_address, home_phone: @patient.home_phone, household: @patient.household, insurance_number: @patient.insurance_number, insurance_type: @patient.insurance_type, is_handicapped: @patient.is_handicapped, marital_status: @patient.marital_status, mobile_phone: @patient.mobile_phone, name: @patient.name, nationality: @patient.nationality, occupation: @patient.occupation, orgnization: @patient.orgnization, orgnization_address: @patient.orgnization_address, patient_ids: @patient.patient_ids, photo: @patient.photo, residence: @patient.residence, sex: @patient.sex, social_security_number: @patient.social_security_number, spell_code: @patient.spell_code, vaccination_history: @patient.vaccination_history }
    end

    assert_redirected_to patient_path(assigns(:patient))
  end

  test "should show patient" do
    get :show, id: @patient
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @patient
    assert_response :success
  end

  test "should update patient" do
    patch :update, id: @patient, patient: { allergy_history: @patient.allergy_history, birthday: @patient.birthday, blood_type: @patient.blood_type, citizenship: @patient.citizenship, contact: @patient.contact, contact_phone: @patient.contact_phone, disease_history: @patient.disease_history, education: @patient.education, habitual_type: @patient.habitual_type, handicap_card_number: @patient.handicap_card_number, health_risk_factor: @patient.health_risk_factor, heredopathia_history: @patient.heredopathia_history, home_address: @patient.home_address, home_phone: @patient.home_phone, household: @patient.household, insurance_number: @patient.insurance_number, insurance_type: @patient.insurance_type, is_handicapped: @patient.is_handicapped, marital_status: @patient.marital_status, mobile_phone: @patient.mobile_phone, name: @patient.name, nationality: @patient.nationality, occupation: @patient.occupation, orgnization: @patient.orgnization, orgnization_address: @patient.orgnization_address, patient_ids: @patient.patient_ids, photo: @patient.photo, residence: @patient.residence, sex: @patient.sex, social_security_number: @patient.social_security_number, spell_code: @patient.spell_code, vaccination_history: @patient.vaccination_history }
    assert_redirected_to patient_path(assigns(:patient))
  end

  test "should destroy patient" do
    assert_difference('Patient.count', -1) do
      delete :destroy, id: @patient
    end

    assert_redirected_to patients_path
  end
end
