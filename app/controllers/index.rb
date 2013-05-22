
get '/' do
  erb :index
end

post '/sign_in' do
  @game = Game.create
  @player1 = User.find_or_create_by_name(name: params[:player1])
  @player2 = User.find_or_create_by_name(name: params[:player2])
  @game.users << @player1
  @game.users << @player2
  @board_length = params[:board_length]
  session[:id] = @game.id
  # {redirect: "/play/#{@game.id}"}.to_json
  content_type :json
  {game: @game, player1: @game.users[0], player2: @game.users[1], board_length: @board_length}.to_json
end

get '/play/:id' do
 @game = Game.find(params[:id])
 p @game.users
 erb :play
end

post '/results' do
  puts "here"
  puts params
  def winning_player
    if params[:winner] == "1"
      @player1 = @game.users[0]
    else
      @player2 = @game.users[1]
    end
  end
  @game = Game.find(session[:id])
  @game.update_attributes(winner: winning_player)
  
end

get '/play/:id/results' do
  playerhash = {game: [99,10,19], start: 'now', stuff: 'stuff'}.to_json
end
