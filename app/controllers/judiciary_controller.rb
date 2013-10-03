class JudiciaryController < ApplicationController
  before_filter :authenticate_admin!, :except => [:index, :members, :resolutions, :constitution, :bylaws, :start_a_club, :submit_complaint, :request_records, :re_recognition, :archives]
  
  def index
  end
  def members
    @judiciary_members = JudiciaryMembers.all
  end
  def minutes
  end
  def resolutions
  end
  def constitution
  end
  def bylaws
  end
  def start_a_club
  end
  def submit_complaint
  end
  def request_records
  end
  def re_recognition
  end
  def archives
  end

  # member resources
  def members_new
    @judiciary_member = JudiciaryMembers.new
  end
  def members_create
    @judiciary_member = JudiciaryMembers.create(params[:judiciary_members])
    redirect_to judiciary_members_path
  end
  def members_edit
    @judiciary_member = JudiciaryMembers.find(params[:id])
  end
  def members_update
    @judiciary_member = JudiciaryMembers.find(params[:id])
    if @judiciary_member.update_attributes(params[:judiciary_members])
      redirect_to judiciary_members_path
    end
  end
  def members_destroy
    @judiciary_member = JudiciaryMembers.find(params[:id])
    @judiciary_member.destroy
    redirect_to judiciary_members_path
  end
end
