<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SocialLife extends Model
{
    use HasFactory;

    protected $table = "social_life";

    protected $fillable = [
        "platform_name", "username", "profile_link", "client_id"
    ];

    public static $platform_list = [
        "Triller", "Periscope", "Vimeo", "Valence", "Untappd", "Elpha", "Yubo", "Peanut", "Houseparty", "Caffeine", "Steemit", "Baidu Tieba", "23snaps", "Likee", "8tracks", "Academia", "Amikumu", "aNobii", "ASMALLWORLD", "Athlinks", "BAND", "beBee", "blind", "diaspora*", "Fark", "MeWe", "Facebook", "Instagram", "Twitter", "Tumblr", "LinkedIn", "WhatsApp", "Snapchat", "Pinterest", "Reddit", "YouTube", "Mix", "Tagged", "Nextdoor", "DeviantArt", "Quora", "Meetup", "ReverbNation", "Flixster", "Goodreads", "Twitch", "CaringBridge", "Wattpad", "Viadeo", "Crunchyroll", "Skyrock", "VK", "MyHeritage", "LiveJournal", "Classmates", "SoundCloud", "Bubbly", "Flickr", "We Heart It", "Influenster", "FilmAffinity", "Open Diary", "Yelp", "CollegeHumor", "Gaia Online", "MocoSpace", "CouchSurfing", "Funny or Die", "italki", "eToro", "XING", "MeetMe", "Ravelry", "Care2", "YY", "Vero", "Medium", "GIPHY", "Tribe", "Tencent QQ", "WeChat", "Qzone", "TikTok", "Sina Weibo", "Kuaishou", "Skype", "Viber", "LINE", "LINE PLAY", "The Dots", "Telegram", "Foursquare Swarm", "Douban", "Discord", "Badoo", "Myspace", "Mixi", "Ravelry", "Cellufun", "Xanga", "Imgur", "Ello", "WT Social",
    ];


    protected $appends = ["created_date"];

    public function getCreatedDateAttribute(){
        return $this->created_at->format(config('app.date_format'));
    }

}
