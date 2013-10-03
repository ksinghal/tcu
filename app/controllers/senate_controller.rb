class SenateController < ApplicationController
  before_filter :authenticate_admin!, :except => [:index, :members, :calendar, :minutes, :resolutions, :constitution, :bylaws, :committees, :archives]

  def index
  end
  def members
    @senate_members = SenateMembers.all
  end
  def calendar
  end
  def minutes
  end
  def resolutions
  end
  def constitution
  end
  def bylaws
  end
  def committees
  end
  def archives
  end

  # member resources
  def members_new
    @senate_member = SenateMembers.new
  end
  def members_create
    @senate_member = SenateMembers.create(params[:senate_members])
    redirect_to senate_members_path
  end
  def members_edit
    @senate_member = SenateMembers.find(params[:id])
  end
  def members_update
    @senate_member = SenateMembers.find(params[:id])
    if @senate_member.update_attributes(params[:senate_members])
      redirect_to senate_members_path
    end
  end
  def members_destroy
    @senate_member = SenateMembers.find(params[:id])
    @senate_member.destroy
    redirect_to senate_members_path
  end

end
