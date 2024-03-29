class StudentorganizationsController < ApplicationController
  before_filter :authenticate_admin!, :except => [:index, :cultural, :programming, :media, :religious, :performance, :service_and_miscellaneous, :pre_professional, :political, :student_government]

  def index
  end
  def new
    @group = StudentGroups.new
  end
  def create
    @group = StudentGroups.create(params[:student_groups])
    redirect_to studentorganizations_cultural_path
  end
  def edit
    @group = StudentGroups.find(params[:id])
  end
  def update
    @group = StudentGroups.find(params[:id])
    if @group.update_attributes(params[:student_groups])
      redirect_to studentorganizations_cultural_path
    end
  end
  def destroy
    @group = StudentGroups.find(params[:id])
    @group.destroy
    redirect_to studentorganizations_cultural_path
  end


  def cultural
    @groups = StudentGroups.where("council = ?", 1).order('account_number ASC')
  end
  def programming
    @groups = StudentGroups.where("council = ?", 2).order('account_number ASC')
  end
  def media
    @groups = StudentGroups.where("council = ?", 3).order('account_number ASC')
  end
  def religious
    @groups = StudentGroups.where("council = ?", 4).order('account_number ASC')
  end
  def performance
    @groups = StudentGroups.where("council = ?", 5).order('account_number ASC')
  end
  def service_and_miscellaneous
    @groups = StudentGroups.where("council = ?", 6).order('account_number ASC')
  end
  def pre_professional
    @groups = StudentGroups.where("council = ?", 7).order('account_number ASC')
  end
  def political
    @groups = StudentGroups.where("council = ?", 8).order('account_number ASC')
  end
  def student_government
    @groups = StudentGroups.where("council = ?", 9).order('account_number ASC')
  end
end
