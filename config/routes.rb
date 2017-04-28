Rails.application.routes.draw do
  devise_for :users, controllers: { sessions: "sessions" }
  root to: "pages#index"

  get "/all", to: "pages#index"
  get "/sign-in", to: "pages#index"
  get "/sign-up", to: "pages#index"
  get "/profile/*other", to: "pages#index"

  resources :users, only: nil, shallow: true do
    resources :notes, only: [:index, :show, :update, :destroy]
  end
  resources :notes, only: :create
  resources :follows, only: [:create, :destroy] do
    collection do
      get :followers
      get :followed
    end
  end
  resources :profiles, only: [:show] do
    member do
      get :followers
      get :followed
    end
  end
end
