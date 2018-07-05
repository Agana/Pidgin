import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { PrefacePage } from '../pages/preface/preface';
import { IntroductionPage } from '../pages/introduction/introduction';
import { Chapter1TheBuildingBlocksOfPidginPage } from '../pages/chapter1the-building-blocks-of-pidgin/chapter1the-building-blocks-of-pidgin';
import { Chapter2SentencesPage } from '../pages/chapter2sentences/chapter2sentences';
import { Chapter3NounsPage } from '../pages/chapter3nouns/chapter3nouns';
import { Chapter4PronounsPage } from '../pages/chapter4pronouns/chapter4pronouns';
import { Chapter5AdjectivesPage } from '../pages/chapter5adjectives/chapter5adjectives';
import { Chapter6VerbTensePage } from '../pages/chapter6verb-tense/chapter6verb-tense';
import { Chapter7ConcordPage } from '../pages/chapter7concord/chapter7concord';
import { Chapter8PrepositionsPage } from '../pages/chapter8prepositions/chapter8prepositions';
import { Chapter9ConjunctionsPage } from '../pages/chapter9conjunctions/chapter9conjunctions';
import { Chapter10InterjectionsPage } from '../pages/chapter10interjections/chapter10interjections';
import { Chapter11DirectIndirectSpeechPage } from '../pages/chapter11direct-indirect-speech/chapter11direct-indirect-speech';
import { Chapter12SentenceTypesAndMoreOnPhrasesPage } from '../pages/chapter12sentence-types-and-more-on-phrases/chapter12sentence-types-and-more-on-phrases';
import { ThanksPage } from '../pages/thanks/thanks';
import { AppendixAAnswersToExercisesPage } from '../pages/appendix-aanswers-to-exercises/appendix-aanswers-to-exercises';


import { HomePage } from '../pages/home/home';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToHome(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HomePage);
  }goToPreface(params){
    if (!params) params = {};
    this.navCtrl.setRoot(PrefacePage);
  }goToIntroduction(params){
    if (!params) params = {};
    this.navCtrl.setRoot(IntroductionPage);
  }goToChapter1TheBuildingBlocksOfPidgin(params){
    if (!params) params = {};
    this.navCtrl.setRoot(Chapter1TheBuildingBlocksOfPidginPage);
  }goToChapter2Sentences(params){
    if (!params) params = {};
    this.navCtrl.setRoot(Chapter2SentencesPage);
  }goToChapter3Nouns(params){
    if (!params) params = {};
    this.navCtrl.setRoot(Chapter3NounsPage);
  }goToChapter4Pronouns(params){
    if (!params) params = {};
    this.navCtrl.setRoot(Chapter4PronounsPage);
  }goToChapter5Adjectives(params){
    if (!params) params = {};
    this.navCtrl.setRoot(Chapter5AdjectivesPage);
  }goToChapter6VerbTense(params){
    if (!params) params = {};
    this.navCtrl.setRoot(Chapter6VerbTensePage);
  }goToChapter7Concord(params){
    if (!params) params = {};
    this.navCtrl.setRoot(Chapter7ConcordPage);
  }goToChapter8Prepositions(params){
    if (!params) params = {};
    this.navCtrl.setRoot(Chapter8PrepositionsPage);
  }goToChapter9Conjunctions(params){
    if (!params) params = {};
    this.navCtrl.setRoot(Chapter9ConjunctionsPage);
  }goToChapter10Interjections(params){
    if (!params) params = {};
    this.navCtrl.setRoot(Chapter10InterjectionsPage);
  }goToChapter11DirectIndirectSpeech(params){
    if (!params) params = {};
    this.navCtrl.setRoot(Chapter11DirectIndirectSpeechPage);
  }goToChapter12SentenceTypesAndMoreOnPhrases(params){
    if (!params) params = {};
    this.navCtrl.setRoot(Chapter12SentenceTypesAndMoreOnPhrasesPage);
  }goToThanks(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ThanksPage);
  }goToAppendixAAnswersToExercises(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AppendixAAnswersToExercisesPage);
  }
}
