Tcu::Application.routes.draw do
  devise_for :admins, :skip => [:registrations] 
  as :admin do
    get 'admins/edit' => 'devise/registrations#edit', :as => 'edit_admin_registration'
    put 'admins' => 'devise/registrations#update', :as => 'admin_registration'
  end

  # The priority is based upon order of creation:
  # first created -> highest priority.

  # Sample of regular route:
  #   get 'products/:id' => 'catalog#view'
  # Keep in mind you can assign values other than :controller and :action

  # Sample of named route:
  #   get 'products/:id/purchase' => 'catalog#purchase', :as => :purchase
  # This route can be invoked with purchase_url(:id => product.id)

  # Sample resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Sample resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Sample resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Sample resource route with more complex sub-resources
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', :on => :collection
  #     end
  #   end

  # Sample resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end

  # You can have the root of your site routed with "root"
  # just remember to delete public/index.html.
  # root :to => 'welcome#index'

  # See how all your routes lay out with "rake routes"

  # This is a legacy wild controller route that's not recommended for RESTful applications.
  # Note: This route will make all actions in every controller accessible via GET requests.
  # get ':controller(/:action(/:id))(.:format)'

  root :to => 'home#index'

  resources :sliderimage

  get 'home' => 'home#index'

  # Navbar Senate Dropdown Link Pages
  get 'senate/' => 'senate#index'


  get 'senate/members' => 'senate#members'
  get 'senate/members/new' => 'senate#members_new'
  post 'senate/members' => 'senate#members_create'
  get 'senate/members/:id/edit' => 'senate#members_edit', as: 'senate_members_edit'
  put 'senate/members/:id' => 'senate#members_update'
  delete 'senate/members/:id' => 'senate#members_destroy', as: 'senate_members_delete'

  get 'senate/minutes' => 'senate#minutes'
  get 'senate/minutes/new' => 'senate#minutes_new'
  post 'senate/minutes' => 'senate#minutes_create'
  get 'senate/minutes/:id/edit' => 'senate#minutes_edit', as: 'senate_minutes_edit'
  put 'senate/minutes/:id' => 'senate#minutes_update'
  delete 'senate/minutes/:id' => 'senate#minutes_destroy', as: 'senate_minutes_delete'

  get 'senate/calendar' => 'senate#calendar'

  get 'senate/resolutions' => 'senate#resolutions'
  get 'senate/resolutions/new' => 'senate#resolutions_new'
  post 'senate/resolutions' => 'senate#resolutions_create'
  get 'senate/resolutions/:id/edit' => 'senate#resolutions_edit', as: 'senate_resolutions_edit'
  put 'senate/resolutions/:id' => 'senate#resolutions_update'
  delete 'senate/resolutions/:id' => 'senate#resolutions_destroy', as: 'senate_resolutions_delete'

  get 'senate/constitution' => 'senate#constitution'
  get 'senate/bylaws' => 'senate#bylaws'
  get 'senate/committees' => 'senate#committees'
  get 'senate/archives' => 'senate#archives'

  # Navbar Treasury Dropdown Link Pages
  get 'treasury/' => 'treasury#index'

  get 'treasury/members' => 'treasury#members'
  get 'treasury/members/new' => 'treasury#members_new'
  post 'treasury/members' => 'treasury#members_create'
  get 'treasury/members/:id/edit' => 'treasury#members_edit', as: 'treasury_members_edit'
  put 'treasury/members/:id' => 'treasury#members_update'
  delete 'treasury/members/:id' => 'treasury#members_destroy', as: 'treasury_members_delete'

  get 'treasury/office_hours' => 'treasury#office_hours'
  get 'treasury/allocations_board' => 'treasury#allocations_board'

  get 'treasury/contact' => 'treasury#contact'
  post 'treasury/contact' => 'treasury#contact'
  
  get 'treasury/paperwork' => 'treasury#paperwork'
  get 'treasury/documents' => 'treasury#documents'
  get 'treasury/phone_directory' => 'treasury#phone_directory'

  # Navbar Elections Commission Dropdown Link Pages
  get 'electionscommission/' => 'electionscommission#index'

  get 'electionscommission/members' => 'electionscommission#members'
  get 'electionscommission/members/new' => 'electionscommission#members_new'
  post 'electionscommission/members' => 'electionscommission#members_create'
  get 'electionscommission/members/:id/edit' => 'electionscommission#members_edit', as: 'electionscommission_members_edit'
  put 'electionscommission/members/:id' => 'electionscommission#members_update'
  delete 'electionscommission/members/:id' => 'electionscommission#members_destroy', as: 'electionscommission_members_delete'

  get 'electionscommission/about' => 'electionscommission#about'
  get 'electionscommission/calendar' => 'electionscommission#calendar'
  get 'electionscommission/candidates' => 'electionscommission#candidates'
  get 'electionscommission/current_election' => 'electionscommission#current_election'
  get 'electionscommission/documents' => 'electionscommission#documents'
  get 'electionscommission/applications' => 'electionscommission#applications'
  get 'electionscommission/election_results_archive' => 'electionscommission#election_results_archive'
  get 'electionscommission/get_involved' => 'electionscommission#get_involved'
  get 'electionscommission/referenda' => 'electionscommission#referenda'
  get 'electionscommission/vote' => 'electionscommission#vote'

  # Navbar Judiciary Dropdown Link Pages
  get 'judiciary/' => 'judiciary#index'

  get 'judiciary/members' => 'judiciary#members'
  get 'judiciary/members/new' => 'judiciary#members_new'
  post 'judiciary/members' => 'judiciary#members_create'
  get 'judiciary/members/:id/edit' => 'judiciary#members_edit', as: 'judiciary_members_edit'
  put 'judiciary/members/:id' => 'judiciary#members_update'
  delete 'judiciary/members/:id' => 'judiciary#members_destroy', as: 'judiciary_members_delete'

  get 'judiciary/constitution' => 'judiciary#constitution'
  get 'judiciary/bylaws' => 'judiciary#bylaws'
  get 'judiciary/start_a_club' => 'judiciary#start_a_club'
  get 'judiciary/submit_complaint' => 'judiciary#submit_complaint'
  get 'judiciary/request_records' => 'judiciary#request_records'
  get 'judiciary/re_recognition' => 'judiciary#re_recognition'
  get 'judiciary/archives' => 'judiciary#archives'

  # Navbar Student Organizations Dropdown Link Pages
  get 'studentorganizations/new' => 'studentorganizations#new'
  post 'studentorganizations/' => 'studentorganizations#create'
  get 'studentorganizations/:id/edit' => 'studentorganizations#edit', as: 'studentorganizations_edit'
  put 'studentorganizations/:id' => 'studentorganizations#update'
  delete 'studentorganizations/:id' => 'studentorganizations#destroy', as: 'studentorganizations_delete'

  get 'studentorganizations/cultural' => 'studentorganizations#cultural'
  get 'studentorganizations/programming' => 'studentorganizations#programming'
  get 'studentorganizations/media' => 'studentorganizations#media'
  get 'studentorganizations/religious' => 'studentorganizations#religious'
  get 'studentorganizations/performance' => 'studentorganizations#performance'
  get 'studentorganizations/service_and_miscellaneous' => 'studentorganizations#service_and_miscellaneous'
  get 'studentorganizations/pre_professional' => 'studentorganizations#pre_professional'
  get 'studentorganizations/political' => 'studentorganizations#political'
  get 'studentorganizations/student_government' => 'studentorganizations#student_government'


end
