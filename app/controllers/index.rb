
get '/' do
  erb :index
end

post '/sign_in' do
   @game = create_players(params)
     session[:id] = @game.id
  {redirect: "/play/#{@game.id}"}.to_json
end

get '/play/:id' do
 @game = Game.find(params[:id])
 p @game.users
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
  playerhash = {game: [99,10,19], start: 'now', stuff: 'stuff'}.to_json
end
