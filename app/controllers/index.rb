
get '/' do
  # Look in app/views/index.erb
  erb :index
end

post '/sign_in' do
   @game = create_players(params)
   puts "here!!!!!!!!!!!"
   p @game
  # @player1 = User.find_or_create_by_name(params[:player1])
  # @player2 = User.find_or_create_by_name(params[:player2])
  # new_game("one")
  # @game = Game.create
  # @game.users << @player1
  # @game.users << @player2
  redirect "/play/#{@game.id}"
end

get '/play/:id' do
 @game = Game.find(params[:id])
 @time = Time.now
 erb :play
end

post '/play/:id/results' do
  puts "here"
  puts params
  def winning_player
    if params[:winner] == "1"
      @player1 = @game.users[0]
    else
      @player2 = @game.users[1]
    end
  end

  @game = Game.find(params[:id])


  @game.update_attributes(winner: winning_player)
  "yay!"
  content_type :json

end

get '/play/:id/results' do
  playerhash = {game: 99, start: 'now', stuff: 'stuff'}.to_json
end
