class PageController < ApplicationController
  def index
  end

  def user
    render  :text => "{  success: true,users: [ {id: 1, name: 'Ed padsdk',    email: 'ed ward @sencha.com'}, {id: 2, name: 'Tommy', email: 'tommy@sencha.com'}   ]} "
  end


  def patient
    render  :text => "{  success: true,patients: [ {patient_ids: 1, name: 'Ed padsdk',    spell_code: 'ed ward @sencha.com'}, {patient_ids: 2, name: 'Tommy', spell_code: 'tommy@sencha.com'}   ]} "
  end
end
