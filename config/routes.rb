Rails.application.routes.draw do
  devise_for :users
  root to: "pages#index"

  get "/sign-in", to: "pages#index"
  get "/sign-up", to: "pages#index"

  get "/browse", to: "pages#index"
  get "/profiles/*other", to: "pages#index"
  get "/settings", to: "pages#index"
  get "/settings/password", to: "pages#index"
  get "/offline", to: "pages#index"

  constraints lambda { |request| request.xhr? } do
    get "/notes/latest", to: "notes#latest"
    resources :users, only: :show, shallow: true do
      resources :notes, only: [:index, :update, :destroy]
      member do
        get :followers, to: "users#followers"
        get :followed, to: "users#followed"
      end
    end
    resources :notes, only: :create
    resources :follows, only: [:create, :destroy]
  end
end
