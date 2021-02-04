import { Component, OnInit } from '@angular/core';
import { Tweet } from 'src/app/models';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  title = 'Home'
  userName = 'Sefa Öztürkmen'
  img = '../assets/img/sefa.jpg'



  constructor() { }

  ngOnInit(): void {
    const tweetListFromLS = window.localStorage.getItem('tweetList');
    if (tweetListFromLS) {
      this.tweetList = JSON.parse(tweetListFromLS);
    }
  }


  tweetList: Tweet[] = [];

  addTweet(text: string): void {
    if (text == '') {
      return alert('Please Enter a Tweet')

    }
    let image = this.img;
    let name = this.userName;
    let comment = Math.floor(Math.random() * 50);
    let retweet = Math.floor(Math.random() * 50);
    let fav = Math.floor(Math.random() * 50);
    let share = Math.floor(Math.random() * 50);
    let isComment: boolean = false;
    let isRetweet: boolean = false;
    let isFav: boolean = false;
    let isShare: boolean = false;

    let newTweet: Tweet = {
      image,
      text,
      name,
      comment,
      retweet,
      fav,
      share,
      isComment,
      isRetweet,
      isFav,
      isShare
    }
    this.tweetList.unshift(newTweet)

    this.setTweet();
  }

  setTweet() {
    window.localStorage.setItem('tweetList', JSON.stringify(this.tweetList));
  }

  deleteTweet(tweet: Tweet) {
    confirm('sil?')
    const Tweetİndex = this.tweetList.findIndex(m => m.text === tweet.text);
    this.tweetList.splice(Tweetİndex, 1);
    this.setTweet();
  }



  addComment(tweet: Tweet) {
    if (tweet.isComment == false) {
      console.log(tweet)
      tweet.comment += 1;
      tweet.isComment = true;
    } else {
      console.log(tweet)
      tweet.comment -= 1;
      tweet.isComment = false;
    }
    this.setTweet()
  }

  addRetweet(tweet: Tweet) {
    if (tweet.isRetweet == false) {
      console.log(tweet)
      tweet.retweet += 1;
      tweet.isRetweet = true;
    } else {
      console.log(tweet)
      tweet.retweet -= 1;
      tweet.isRetweet = false;
    }
    this.setTweet()
  }

  addFav(tweet: Tweet) {
    if (tweet.isFav == false) {
      console.log(tweet)
      tweet.fav += 1;
      tweet.isFav = true;
    } else {
      console.log(tweet)
      tweet.fav -= 1;
      tweet.isFav = false;
    }
    this.setTweet()
  }

  addShare(tweet: Tweet) {
    if (tweet.isShare == false) {
      console.log(tweet)
      tweet.share += 1;
      tweet.isShare = true;
    } else {
      console.log(tweet)
      tweet.share -= 1;
      tweet.isShare = false;
    }
  }
}



