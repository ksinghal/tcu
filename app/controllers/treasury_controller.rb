class TreasuryController < ApplicationController
  before_filter :authenticate_admin!, :except => [:index, :members, :office_hours, :allocations_board, :budgets, :contact, :resolutions, :paperwork, :documents, :phone_directory, :funding, :press]

  def index
  end
  def members
    @treasury_members = TreasuryMembers.all
  end
  def office_hours
  end
  def allocations_board
  end
  def budgets
  end
  def contact
  end
  def resolutions
  end
  def paperwork
  end
  def documents
  end
  def phone_directory
  end
  def funding
  end
  def press
  end


  # member resources
  def members_new
    @treasury_member = TreasuryMembers.new
  end
  def members_create
    @treasury_member = TreasuryMembers.create(params[:treasury_members])
    @treasury_members = TreasuryMembers.all
    render :action => "members"
  end
  def members_edit
  end
  def members_update
  end
  def members_destroy
  end

end
