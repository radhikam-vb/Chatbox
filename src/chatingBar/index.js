import React from 'react'
import './styles.css'
import { timeSince } from "./timeAgoPipe"

class Chatingbar extends React.Component {

   textInput = null

  constructor(props) {
    super(props)
    this.state = {
      list: [
        { message: "Hello user", createdAt: "2021-09-11T13:10:02.298Z", sender: "agent", _id: "1" },
        { message: "Hii ,I hope all is well", createdAt: "2021-09-12T13:10:20.298Z", sender: "user", _id: "2" },
        { message: "Yeap,How are you doing today", createdAt: "2021-09-13T13:13:02.298Z", sender: "agent", id: "3" },
        { message: "I'm good, how about you", createdAt: "2021-09-14T13:14:02.298Z", sender: "user", id: "4" },
        { message: "I'm good,thanks for asking", createdAt: "2021-09-15T13:20:02.298Z", sender: "agent", id: "5" },
        { message: "Great, how can I help you today?", createdAt: "2021-09-16T13:23:02.298Z", sender: "user", id: "6" }
      ],
      selectedValues: {
        message: '', createdAt:"", sender: "", _id: ""
      }, searchText: ''
    }
    this.textInput = React.createRef()
  }
  inputChange = (e) => {
    this.setState({
      ...this.state,
      selectedValues: {
        ...this.state.selectedValues,
        [e.target.name]: e.target.value,
        sender:"agent",
        createdAt:new Date(),
        _id: this.state.list.length + 1,
      }
    })
  }
  sendData = () => {
    const selectedValues = this.state
    console.log("selected",selectedValues.selectedValues)
    if(selectedValues.selectedValues.message == "" && selectedValues.selectedValues.message == null ) return
    this.state.list.push(selectedValues.selectedValues)
    this.setState({
      ...this.state,
      selectedValues:{
        message:"",
       

      }

    })
    this.textInput.current.value = "";
  }
  render() {

    return (
      <body>
        <div className="container-fluid h-100">
          <div className="row justify-content-center ">
            <div className="col-md-8 col-xl-6 chat">
              <div className="card">
                <div className="card-header msg_head">
                  <div className="d-flex bd-highlight">
                    <div className="img_cont">
                       <img src="https://bootdey.com/img/Content/avatar/avatar6.png" className="rounded-circle user_img" /> 
                     
                      <span className="online_icon" />
                    </div>
                    <div className="user_info">
                      <span>ChatBox</span>
                    </div>
                  </div>
                </div>
                <div className="card-body msg_card_body">
                  {
                    this.state.list.map((item) => {
                      if (item.sender === "agent") {
                        return (
                          <div className="d-flex justify-content-start mb-4">
                            <div className="img_cont_msg">
                              <img src="https://bootdey.com/img/Content/avatar/avatar6.png" className="rounded-circle user_img_msg" />
                            </div>
                            <div className="msg_cotainer">
                              {item.message}
                              <span className="msg_time" style = {{width:"100px"}}>{timeSince(item.createdAt)}</span>
                            </div>
                          </div>
                        )
                      }
                      if (item.sender === "user") {
                        return (
                          <div className="d-flex justify-content-end mb-4">
                            <div className="msg_cotainer_send">
                            {item.message}
                              <span className="msg_time_send">{timeSince(item.createdAt)}</span>
                            </div>
                            <div className="img_cont_msg">
                              <img  src="https://bootdey.com/img/Content/avatar/avatar1.png" className="rounded-circle user_img_msg" />
                            </div>
                          </div>
                        )

                      }
                    })
                  }


                </div>
                <div className="card-footer">
                  <div className="input-group">
                    <div className="input-group-append">
                      <span className="input-group-text attach_btn"><i className="fas fa-paperclip" /></span>
                    </div>
                    <input ref={this.textInput}  name="message" 
                              onChange={(e)=>{this.inputChange(e)}}
                               className="form-control type_msg"
                                placeholder="Type your message..." 
                                 />
                    <div className="input-group-append">
                      <span onClick={this.sendData} className="input-group-text send_btn ">Send<i className="fas fa-location-arrow" /></span>
                    </div>
                  </div>
                </div>
              </div>
             </div>
          </div> 
        </div>
      </body>
    )
  }
}
export default Chatingbar;