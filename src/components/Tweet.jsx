import ProfileImages from "./Profileimage";
import Users from "./User";
import Time from "./Timestamp";
import Messages from "./Message";
import Actions from "./Actions";


function Tweet(props) {
  return (
    <div className="tweet">
<ProfileImages image = {props.tweet.user.image}/>
      <div className="body">
        <div className="top">
          <Users name = {props.tweet.user.name} handle = {props.tweet.user.handle}/>
            

          <Time timestamp = {props.tweet.timestamp}/>
        </div>

        <Messages message = {props.tweet.message}/>

        <Actions actions = {props.tweet.actions}/>
       


        
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
    
  );
  
}

export default Tweet;
