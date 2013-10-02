Tcu::Application.routes.draw do
  devise_for :admins

  # The priority is based upon order of creation:
  # first created -> highest priority.

  # Sample of regular route:
  #   match 'products/:id' => 'catalog#view'
  # Keep in mind you can assign values other than :controller and :action

  # Sample of named route:
  #   match 'products/:id/purchase' => 'catalog#purchase', :as => :purchase
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
  # match ':controller(/:action(/:id))(.:format)'

  root :to => 'home#index'

  resources :home

  # Navbar Senate Dropdown Link Pages
  match 'senate/' => 'senate#index'
  match 'senate/members' => 'senate#members'
  match 'senate/calendar' => 'senate#calendar'
  match 'senate/minutes' => 'senate#minutes'
  match 'senate/resolutions' => 'senate#resolutions'
  match 'senate/constitution' => 'senate#constitution'
  match 'senate/bylaws' => 'senate#bylaws'
  match 'senate/committees' => 'senate#committees'
  match 'senate/archives' => 'senate#archives'

  # Navbar Treasury Dropdown Link Pages
  match 'treasury/' => 'treasury#index'
  match 'treasury/office_hours' => 'treasury#office_hours'
  match 'treasury/allocations_board' => 'treasury#allocations_board'
  match 'treasury/budgets' => 'treasury#budgets'
  match 'treasury/contact' => 'treasury#contact'
  match 'treasury/resolutions' => 'treasury#resolutions'
  match 'treasury/paperwork' => 'treasury#paperwork'
  match 'treasury/documents' => 'treasury#documents'
  match 'treasury/phone_directory' => 'treasury#phone_directory'
  match 'treasury/funding' => 'treasury#funding'
  match 'treasury/press' => 'treasury#press'

  # Navbar Elections Commission Dropdown Link Pages
  match 'electionscommission/' => 'electionscommission#index'
  match 'electionscommission/about' => 'electionscommission#about'
  match 'electionscommission/calendar' => 'electionscommission#calendar'
  match 'electionscommission/candidates' => 'electionscommission#candidates'
  match 'electionscommission/resolutions' => 'electionscommission#resolutions'
  match 'electionscommission/current_election' => 'electionscommission#current_election'
  match 'electionscommission/documents' => 'electionscommission#documents'
  match 'electionscommission/applications' => 'electionscommission#applications'
  match 'electionscommission/election_results_archive' => 'electionscommission#election_results_archive'
  match 'electionscommission/get_involved' => 'electionscommission#get_involved'
  match 'electionscommission/referenda' => 'electionscommission#referenda'
  match 'electionscommission/vote' => 'electionscommission#vote'

  # Navbar Judiciary Dropdown Link Pages
  match 'judiciary/' => 'judiciary#index'
  match 'judiciary/members' => 'judiciary#members'
  match 'judiciary/minutes' => 'judiciary#minutes'
  match 'judiciary/resolutions' => 'judiciary#resolutions'
  match 'judiciary/constitution' => 'judiciary#constitution'
  match 'judiciary/bylaws' => 'judiciary#bylaws'
  match 'judiciary/start_a_club' => 'judiciary#start_a_club'
  match 'judiciary/submit_complaint' => 'judiciary#submit_complaint'
  match 'judiciary/request_records' => 'judiciary#request_records'
  match 'judiciary/re_recognition' => 'judiciary#re_recognition'
  match 'judiciary/archives' => 'judiciary#archives'

  # Navbar Student Organizations Dropdown Link Pages
  match 'studentorganizations/' => 'studentorganizations#index'
  match 'studentorganizations/cultural' => 'studentorganizations#cultural'
  match 'studentorganizations/programming' => 'studentorganizations#programming'
  match 'studentorganizations/media' => 'studentorganizations#media'
  match 'studentorganizations/religious' => 'studentorganizations#religious'
  match 'studentorganizations/performance' => 'studentorganizations#performance'
  match 'studentorganizations/interest' => 'studentorganizations#interest'
  match 'studentorganizations/pre_professional' => 'studentorganizations#pre_professional'
  match 'studentorganizations/political' => 'studentorganizations#political'
  match 'studentorganizations/student_government' => 'studentorganizations#student_government'


end
