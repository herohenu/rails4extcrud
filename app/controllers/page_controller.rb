class PageController < ApplicationController
  def index
  end

  def user
    render  :text => "{  success: true,users: [ {id: 1, name: 'Ed padsdk',    email: 'ed ward @sencha.com'}, {id: 2, name: 'Tommy', email: 'tommy@sencha.com'}   ]} "
  end
end
