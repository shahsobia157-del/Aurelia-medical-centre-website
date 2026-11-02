import React, { useState } from 'react';
import { BlogArticle } from '../types';
import { BLOG_ARTICLES } from '../data/hospitalData';
import { ArrowRight, BookOpen, Clock, User } from 'lucide-react';

interface HealthBlogProps {
  onReadArticle: (article: BlogArticle) => void;
}

export const HealthBlog: React.FC<HealthBlogProps> = ({ onReadArticle }) => {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  return (
    <section className="py-20 lg:py-28 bg-[#FAF9F6] border-t border-[#252C2D]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#C6A66B] uppercase mb-2">
            <span className="w-4 h-px bg-[#C6A66B] inline-block" aria-hidden="true" />
            <span>Health Insights & Guidance</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[30px] font-light text-[#123D40] tracking-tight">
            Aurelia Medical Journal
          </h2>
          <div className="w-12 h-0.5 bg-[#C6A66B] mx-auto mt-3 mb-4" aria-hidden="true" />
          <p className="text-base text-[#252C2D]/75 leading-relaxed">
            Evidence-based perspectives on preventative cardiology, lifestyle longevity, and modern clinical science.
          </p>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_ARTICLES.map((art) => {
            const hasError = imageErrors[art.id];

            return (
              <article
                key={art.id}
                className="bg-white rounded-lg overflow-hidden border border-[#252C2D]/8 hover:border-[#C6A66B]/50 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Article Thumbnail */}
                  <div className="relative aspect-[16/10] bg-[#DCE8E2]/30 overflow-hidden">
                    {!hasError ? (
                      <img
                        src={art.image}
                        alt={art.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                        onError={() => setImageErrors((prev) => ({ ...prev, [art.id]: true }))}
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#123D40]/10 to-[#FAF9F6]">
                        <BookOpen className="w-10 h-10 text-[#123D40]/40" />
                      </div>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    {/* Unboxed Metadata Discipline */}
                    <div className="flex items-center gap-2 text-xs text-[#252C2D]/60 mb-2.5">
                      <span className="text-[#C6A66B] font-semibold">{art.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{art.date}</span>
                      <span aria-hidden="true">·</span>
                      <span>{art.readTime}</span>
                    </div>

                    <h3 className="text-lg font-semibold text-[#123D40] tracking-tight leading-snug mb-3">
                      {art.title}
                    </h3>

                    <p className="text-xs text-[#252C2D]/75 leading-relaxed line-clamp-3 mb-4">
                      {art.excerpt}
                    </p>

                    <div className="flex items-center gap-2 text-xs text-[#123D40] font-medium pt-3 border-t border-[#252C2D]/5">
                      <User className="w-3.5 h-3.5 text-[#C6A66B]" />
                      <span>{art.author}</span>
                      <span className="text-[#252C2D]/40">({art.authorRole})</span>
                    </div>
                  </div>
                </div>

                {/* Read Action Button */}
                <div className="px-6 pb-6 pt-0">
                  <button
                    onClick={() => onReadArticle(art)}
                    className="w-full py-2.5 px-4 text-xs font-semibold text-[#123D40] hover:text-white bg-[#FAF9F6] hover:bg-[#123D40] border border-[#123D40]/20 rounded transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
