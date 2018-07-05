import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
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


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PrefacePage,
    IntroductionPage,
    Chapter1TheBuildingBlocksOfPidginPage,
    Chapter2SentencesPage,
    Chapter3NounsPage,
    Chapter4PronounsPage,
    Chapter5AdjectivesPage,
    Chapter6VerbTensePage,
    Chapter7ConcordPage,
    Chapter8PrepositionsPage,
    Chapter9ConjunctionsPage,
    Chapter10InterjectionsPage,
    Chapter11DirectIndirectSpeechPage,
    Chapter12SentenceTypesAndMoreOnPhrasesPage,
    ThanksPage,
    AppendixAAnswersToExercisesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PrefacePage,
    IntroductionPage,
    Chapter1TheBuildingBlocksOfPidginPage,
    Chapter2SentencesPage,
    Chapter3NounsPage,
    Chapter4PronounsPage,
    Chapter5AdjectivesPage,
    Chapter6VerbTensePage,
    Chapter7ConcordPage,
    Chapter8PrepositionsPage,
    Chapter9ConjunctionsPage,
    Chapter10InterjectionsPage,
    Chapter11DirectIndirectSpeechPage,
    Chapter12SentenceTypesAndMoreOnPhrasesPage,
    ThanksPage,
    AppendixAAnswersToExercisesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}