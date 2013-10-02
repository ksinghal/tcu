class ElectionscommissionController < ApplicationController
  before_filter :authenticate_admin!, :except => [:index, :about, :members, :calendar, :candidates, :resolutions, :current_election, :documents, :applications, :election_results_archive, :get_involved, :referenda, :vote]

  def index
  end
  def about
  end
  def members
    @ecom_members = EcomMembers.all
  end
  def calendar
  end
  def candidates
  end
  def resolutions
  end
  def current_election
  end
  def documents
  end
  def applications
  end
  def election_results_archive
  end
  def get_involved
  end
  def referenda
  end
  def vote
  end

  # member resources
  def members_new
    @ecom_member = EcomMembers.new
  end
  def members_create
    @ecom_member = EcomMembers.create(params[:ecom_members])
    @ecom_members = EcomMembers.all
    render :action => "members"
  end
  def members_edit
  end
  def members_update
  end
  def members_destroy
  end

end
