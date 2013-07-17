class PageController < ApplicationController
  def index
  end

  def user
    render  :json => {  success: true,
                        users: [
                            {id: 1, name: 'Ed pad',    email: 'ed ward @sencha.com'},
                            {id: 2, name: 'Tommy', email: 'tommy@sencha.com'}
                        ]}
  end
end
