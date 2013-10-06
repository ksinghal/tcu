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
    redirect_to electionscommission_members_path
  end
  def members_edit
    @ecom_member = EcomMembers.find(params[:id])
  end
  def members_update
    @ecom_member = EcomMembers.find(params[:id])
    if @ecom_member.update_attributes(params[:ecom_members])
      redirect_to electionscommission_members_path
    end
  end
  def members_destroy
    @ecom_member = EcomMembers.find(params[:id])
    @ecom_member.destroy
    redirect_to electionscommission_members_path
  end

end
